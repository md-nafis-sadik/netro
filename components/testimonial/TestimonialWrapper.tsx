import { fetchWithDelay } from "@/lib/apiHandler";
import Testimonial from "./Testimonial";

type Testimonial = {
  author: string;
};

type TestimonialsResponse = {
  data: Testimonial[];
};

const TestimonialWrapper = async () => {
  let testimonials = (await fetchWithDelay(
    `/testimonials/all`
  )) as TestimonialsResponse;

  return <Testimonial data={testimonials?.data} />;
};

export default TestimonialWrapper;
