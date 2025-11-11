import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc",
      content: "Alex transformed our user experience completely. The new design increased our conversion rate by 40% and received overwhelmingly positive feedback from users. Their attention to detail and user-centered approach is exceptional.",
      avatar: "SC"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. They delivered a pixel-perfect design system and implemented it flawlessly. The code quality is excellent and the documentation made it easy for our team to maintain.",
      avatar: "MR"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Design Director",
      company: "Creative Agency",
      content: "Alex brings a unique combination of design thinking and technical expertise. They consistently deliver high-quality work on time and communicate effectively throughout the entire process. A true professional.",
      avatar: "EJ"
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder",
      company: "FinTech Solutions",
      content: "The mobile app Alex designed for us exceeded all expectations. User retention improved by 75% after launch. Their research-driven approach and iterative design process resulted in an intuitive, accessible product.",
      avatar: "DP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white dark:bg-gray-900">

    </section>
  );
}