import { FC } from 'react';

type Props = {
  title: string;
  text: string;
};

const EmptyPageText: FC<Props> = ({ title, text }) => (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-[80%] flex-col items-center justify-center gap-8 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{text}</p>
    </div>
  );
export default EmptyPageText;
