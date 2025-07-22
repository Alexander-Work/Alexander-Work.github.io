import { Separator } from "@/components/ui/separator"

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-4 space-y-8 md:space-y-0 md:space-x-8">
      
      {/* Project 1 */}
      <div className="flex flex-col items-center max-w-sm">
        <img
          src="/images/CardCaptor.png"
          alt="card captor"
          className="w-80 h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-center font-bold underline text-xl">
          E Co-op Business Website "Card Captor"
        </h1>
        <p className="text-center mt-2 font-semibold">
          An all-in-one website and mobile app for MTG. Designed to assist players
          in and out of game, the intent is to have this app open while playing.
          Trade, LFG, decktracking, and in-game tools like life tracking and a card
          database are all included. This project is in development — the website
          is first, the mobile app is next.
        </p>
      </div>

      {/* Vertical Separator */}
      <Separator orientation="vertical" className="border-1 min-h-160" />

      {/* Project 2 */}
      <div className="flex flex-col items-center max-w-sm">
        <img
          src="/images/suit-cropped.jpg"
          alt="dapper"
          className="w-80 h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-center font-bold underline text-xl">
          Business Info & Mini Resume
        </h1>
        <p className="text-center mt-2 font-semibold">
          Built as a partner to my business card, this site is also linked in my
          resume to provide employers with more context and showcase additional
          work.
        </p>
      </div>
    </div>
  );
};

export default Projects;