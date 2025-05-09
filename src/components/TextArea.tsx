import React from "react";

interface TextareaProps {
  sections: { subtitle: string; content: string }[];
  index: number;
  setSections: React.Dispatch<React.SetStateAction<{ subtitle: string; content: string }[]>>;
}

export function Textarea({ sections, index, setSections }: TextareaProps) {
  const handleChange = (field: "subtitle" | "content", value: string) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
  };

  return (
    <div className="mb-4">
      <textarea
        value={sections[index].subtitle}
        onChange={(e) => handleChange("subtitle", e.target.value)}
        placeholder={`Title ${index + 1}`}
        className="w-full mb-2 p-2 border rounded-xs"
        required
      />
      <textarea
        value={sections[index].content}
        onChange={(e) => handleChange("content", e.target.value)}
        placeholder={`Content ${index + 1}`}
        className="w-full mb-2 p-2 border rounded-xs"
        required
      />
    </div>
  );
}
