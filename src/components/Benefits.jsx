import Section from '../components/Section'; // Ensure you have imported Section
import Heading from '../components/Headings'; // Ensure you have imported Heading

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
      </div>
    </Section>
  );
};

export default Benefits;
