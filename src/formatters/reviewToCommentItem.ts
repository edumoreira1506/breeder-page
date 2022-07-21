import { Review } from '../hooks/useData'

export default function reviewToCommentItem(review: Review) {
  return {
    image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
    name: review?.breederReviewer?.name,
    date: new Date(review.createdAt),
    content: review?.metadata?.merchantFeedback ?? '',
    answers: [] as any[]
  }
}
