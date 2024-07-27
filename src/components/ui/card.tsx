type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="glass-effect p-8 md:p-12 rounded-xl">{children}</div>;
};

export default Card;
