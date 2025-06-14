import React from "react";
import './sectiontwo.css';

const SectionTwo = () => {
  const features = [
    {
      id: "01",
      title: "Handmade with Love",
      description: "Every item is crafted by hand with passion and attention to detail.",
    },
    {
      id: "02",
      title: "Customized Orders",
      description: "Personalize your gifts with custom colors, styles, and packaging.",
    },
    {
      id: "03",
      title: "Ready to Gift",
      description: "Each piece comes beautifully packaged, perfect for gifting.",
    },
    {
      id: "04",
      title: "Shipping All Over Egypt",
      description: "We deliver anywhere in Egypt — fast, secure, and always handled with care.",
    },
  ];

  return (
    <div className="features-section">
      {features.map((item) => (
        <div className="card" key={item.id}>
          <h1 className="card-id">{item.id}</h1>
          <h2 className="card-title">{item.title}</h2>
          <p className="card-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
