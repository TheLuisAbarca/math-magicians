import './Quote.css';

const famousQuote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.';
const authorQuote = '- William Paul Thurston';

const Quote = () => (
  <section className="quote-section">
    <div className="line" />
    <blockquote>
      <p className="quote">
        {famousQuote}
      </p>
      <cite className="author">
        {authorQuote}
      </cite>
    </blockquote>
  </section>
);

export default Quote;
