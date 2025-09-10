import CompetitionCard from "@/components/CompetitionCard";
import { Calculator, FlaskConical, BookOpen } from "lucide-react";

export default function Home(){
    const competitions = [
      {
        icon: <Calculator />,
        heading: "Mathematics Olympiad",
        description:
          "Challenge your problem-solving skills with complex mathematical puzzles and reasoning tasks.",
        grades: "Grades 1-10",
        participants: "25,000+",
        duration: "2 hours",
        subjects: ["Algebra", "Geometry", "Number Theory"],
        nextCompetition: "March 15, 2025",
        link: "/competitions/",
        status: "Open",
      },
      {
        icon: <FlaskConical />,
        heading: "Science Innovation Challenge",
        description:
          "Explore the wonders of science through practical experiments and theoretical knowledge.",
        grades: "Grades 3-10",
        participants: "18,000+",
        duration: "2.5 hours",
        subjects: ["Physics", "Chemistry", "Biology"],
        nextCompetition: "April 22, 2025",
        link: "/competitions/",
        status: "Open",
      },
      {
        icon: <BookOpen />,
        heading: "Global Language Arts",
        description:
          "Master language skills, creative writing, and literature from around the world.",
        grades: "Grades 1-10",
        participants: "32,000+",
        duration: "1.5 hours",
        subjects: ["Writing", "Reading", "Literature"],
        nextCompetition: "May 10, 2025",
        link: "/competitions/",
        status: "Closed",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Section Heading */}
          <span className="inline-block px-4 py-1 mb-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Global Competitions
          </span>
          <h2 className="text-4xl font-bold mb-4">Choose Your Academic Adventure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            From mathematics to creative arts, discover competitions designed to
            challenge and inspire students across all grade levels.
          </p>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {competitions.map((comp, idx) => (
              <CompetitionCard key={idx} {...comp} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
