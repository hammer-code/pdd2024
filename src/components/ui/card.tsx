type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {children}
    </div>
  )
};

export default Card;
