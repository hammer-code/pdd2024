type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 md:min-h-[700px] min-h-[600px] flex flex-col justify-center items-center">
      {children}
    </div>
  )
};

export default Card;
