import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[400px] w-full rounded-[15px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w round py-3 text-center text-base font-bold">
            Get ready for a game-changing interview experience🎮
          </h2>
          <thead className= "text-center font-extrabold text-4xl" >Welcome to the ultimate</thead><thead className= "text-center font-extrabold text-5xl text-blue-500">"programmers playground"</thead>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-3xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
