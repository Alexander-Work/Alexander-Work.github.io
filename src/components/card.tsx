import React from "react";

interface CardProps {
  title: string;
  content: string[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-2xl p-6 max-w-sm border-2">
      <h2 className="text-xl font-semibold underline mb-2">{title}</h2>
      <ul className="list-disc pl-5 mb-4">
        {content.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
