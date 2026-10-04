import { FormEvent, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { SectionWrapper } from '../../hoc';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TReview } from '../../types';

const REVIEWS_API = import.meta.env.DEV
  ? '/api/reviews'
  : 'https://reviews-express.vercel.app/api/reviews';

const avatarColors = ['#915EFF', '#00cea8', '#0284c7', '#f5af19', '#dc2626'];

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join('');

const today = () => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const isReview = (value: unknown): value is TReview => {
  if (!value || typeof value !== 'object') return false;
  const review = value as TReview;
  return typeof review.name === 'string' && typeof review.review === 'string';
};

const ReviewCard = ({ review, index }: { review: TReview; index: number }) => {
  const color = avatarColors[index % avatarColors.length];
  const meta = [review.position, review.company].filter(Boolean).join(' @ ');

  return (
    <article className="bg-black-200 flex h-full flex-col rounded-3xl p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[42px] font-black leading-none text-white">"</p>
        <p className="text-secondary text-[12px]">{formatDate(review.date)}</p>
      </div>
      <p className="mt-4 flex-1 text-[16px] leading-7 tracking-wide text-white">{review.review}</p>
      <div className="mt-7 flex items-center gap-4">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full text-[14px] font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {initials(review.name)}
        </span>
        <div>
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient"></span> {review.name}
          </p>
          {meta && <p className="text-secondary mt-1 text-[12px]">{meta}</p>}
        </div>
      </div>
    </article>
  );
};

const emptyForm = {
  name: '',
  email: '',
  company: '',
  position: '',
  review: '',
};

const Reviews = () => {
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(REVIEWS_API);
      if (!response.ok) {
        throw new Error('Could not load reviews.');
      }
      const data: unknown = await response.json();
      const list = Array.isArray(data) ? data.filter(isReview) : [];
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setReviews(list);
    } catch {
      setError('Could not load reviews. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();
    const position = form.position.trim();
    const review = form.review.trim();

    if (name.length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (review.length < 8) {
      setError('Please write a review of at least 8 characters.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const response = await fetch(REVIEWS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          position,
          date: today(),
          review,
        }),
      });

      if (!response.ok) {
        throw new Error('Could not publish the review.');
      }

      setForm(emptyForm);
      setOpen(false);
      await loadReviews();
    } catch {
      setError('Could not publish the review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Header useMotion={true} {...config.sections.reviews} />
        <button
          type="button"
          onClick={() => {
            setError('');
            setOpen(true);
          }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M5 12h14"
            />
          </svg>
          Add Review
        </button>
      </div>

      <div className="mt-12">
        {loading && reviews.length === 0 ? (
          <div className="bg-black-200 rounded-3xl px-8 py-16 text-center">
            <p className="text-[18px] text-white">Loading reviews...</p>
          </div>
        ) : error && reviews.length === 0 ? (
          <div className="bg-black-200 rounded-3xl px-8 py-16 text-center">
            <p className="text-[18px] text-white">{error}</p>
            <button
              type="button"
              onClick={() => void loadReviews()}
              className="mt-4 rounded-full bg-white/10 px-5 py-2 text-[14px] font-semibold text-white"
            >
              Retry
            </button>
          </div>
        ) : reviews.length === 0 ? (
          <div className="bg-black-200 rounded-3xl px-8 py-16 text-center">
            <p className="text-[18px] text-white">No reviews yet.</p>
            <p className="text-secondary mt-2 text-[14px]">
              Be the first to share your experience.
            </p>
          </div>
        ) : (
          <>
            {error && <p className="text-secondary mb-4 text-[14px]">{error}</p>}
            <Swiper
              className="reviews-swiper"
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              rewind
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 2 },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={review.id ?? `${review.name}-${index}`} className="!h-auto">
                  <ReviewCard review={review} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8">
            <button
              type="button"
              aria-label="Close review form"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <form
              onSubmit={event => void handleSubmit(event)}
              className="bg-tertiary relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 p-6 shadow-card sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-secondary text-[13px] uppercase tracking-wider">
                    Share your experience
                  </p>
                  <h3 className="mt-1 text-[24px] font-black text-white">Add a review</h3>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/5 px-3 py-1 text-white transition hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <label className="mt-6 block text-[13px] text-white">
                Name
                <input
                  value={form.name}
                  onChange={event => setForm(current => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                  className="bg-black-200 mt-2 w-full rounded-xl border border-white/10 px-4 py-3 text-[15px] text-white outline-none placeholder:text-secondary focus:border-[#915EFF]"
                />
              </label>

              <label className="mt-4 block text-[13px] text-white">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={event =>
                    setForm(current => ({ ...current, email: event.target.value }))
                  }
                  placeholder="you@example.com"
                  className="bg-black-200 mt-2 w-full rounded-xl border border-white/10 px-4 py-3 text-[15px] text-white outline-none placeholder:text-secondary focus:border-[#915EFF]"
                />
              </label>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-[13px] text-white">
                  Position
                  <input
                    value={form.position}
                    onChange={event =>
                      setForm(current => ({
                        ...current,
                        position: event.target.value,
                      }))
                    }
                    placeholder="Software Engineer"
                    className="bg-black-200 mt-2 w-full rounded-xl border border-white/10 px-4 py-3 text-[15px] text-white outline-none placeholder:text-secondary focus:border-[#915EFF]"
                  />
                </label>
                <label className="block text-[13px] text-white">
                  Company
                  <input
                    value={form.company}
                    onChange={event =>
                      setForm(current => ({ ...current, company: event.target.value }))
                    }
                    placeholder="Example Inc."
                    className="bg-black-200 mt-2 w-full rounded-xl border border-white/10 px-4 py-3 text-[15px] text-white outline-none placeholder:text-secondary focus:border-[#915EFF]"
                  />
                </label>
              </div>

              <label className="mt-4 block text-[13px] text-white">
                Review
                <textarea
                  value={form.review}
                  onChange={event =>
                    setForm(current => ({
                      ...current,
                      review: event.target.value,
                    }))
                  }
                  rows={4}
                  placeholder="How was working together?"
                  className="bg-black-200 mt-2 w-full resize-none rounded-xl border border-white/10 px-4 py-3 text-[15px] text-white outline-none placeholder:text-secondary focus:border-[#915EFF]"
                />
              </label>

              {error && <p className="mt-3 text-[13px] text-[#f5af19]">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00cea8] py-3 text-[15px] font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Publishing...' : 'Publish review'}
              </button>
            </form>
          </div>,
          document.body
        )}
    </>
  );
};

export default SectionWrapper(Reviews, 'reviews');
