'use client';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { LayoutList, Users } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import EndCallButton from './EndCallButton';
import Loader from './Loader';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  
  const isPersonalRoom =!!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn('h-[calc(100vh-86px)] hidden ml-2', {
            'show-block': showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        <CallControls onLeave={() => router.push(`/`)} />
        
        <DropdownMenu>
  <div className="flex items-center">
    <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-white" />
    </DropdownMenuTrigger>
  </div>
  <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
    <div>
      <DropdownMenuItem>
      </DropdownMenuItem>
      <DropdownMenu>
        <div className='flex item-center'>
       Group Discussion Topic--<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d]hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-blue-500" />
    </DropdownMenuTrigger>
    </div>
        <DropdownMenuContent>
          {[
            'RISE OF REMOTE WORK',
            'DATA PRIVACY AND PROTECTION',
            'CRYPTOPCURRENCY',
            'TECH IN EDUCATION',
            'GAMING AND MENTAL HEALTH',
            'IOT',
            'DEVIN',
            'BLOKCHAIN',
            'IS DEGREE WORH IT?',
            'AI IN HEALTHCARE'].map((subItem, subIndex) => (
            <div key={subIndex}>
              <DropdownMenuItem>
                {subItem}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <DropdownMenuItem>
      </DropdownMenuItem>
      <DropdownMenu>
        <div className='flex item-center'>
        Data structure and Algorithm--<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d]hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-blue-500" />
    </DropdownMenuTrigger>
    </div>
        <DropdownMenuContent>
          {['What are Data Structures?',
'Why create Data Structures?',
'.Describe the types of Data Structures?',
'.How to implement a queue using stack?',
'.What is a linked list, What are its applications?',
'Difference between Array and Linked list?',
'What are tree traversals?',
'What is hashmap in data structure?',
'Define Segment Tree data structure and its applications.',
'What is a heap data-structure?'
].map((subItem, subIndex) => (
            <div key={subIndex}>
              <DropdownMenuItem>
                {subItem}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <DropdownMenuItem>
      </DropdownMenuItem>
      <DropdownMenu>
        <div className='flex item-center'>
        DataBase Management System--<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d]hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-blue-500" />
    </DropdownMenuTrigger>
    </div>
        <DropdownMenuContent>
          {['What is DBMS?',
 'Difference between DBMS AND RDBMS.',
'What are SQL and its main component?',
'What is Normalization?',
'Describe view and materialized view in DBMS.',
'Discuss vertical and horizontal scaling in the context  of DBMS.',
'Role of database indexing in query optimization.',
'Challenges in managing schemes changes while ensuring compatibility and a data consistency.',
'Importance of data modelling, types of data models and model selection consideration.',
'Database Virtualization in detail.',].map((subItem, subIndex) => (
            <div key={subIndex}>
              <DropdownMenuItem>
                {subItem}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <DropdownMenuItem>
      </DropdownMenuItem>
      <DropdownMenu>
        <div className='flex item-center'>
        Object-Oriented Programming--<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d]hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-blue-500" />
    </DropdownMenuTrigger>
    </div>
        <DropdownMenuContent>
          {['What is Object-Oriented Programming (OOP)?',
'What are the four pillars of Object-Oriented Programming?',
'What is a class and an object in OOP?',
'How does encapsulation promote code maintainability and reusability?',
'Describe SOLID principles in OOP, explain how it helps in software design.',
'What is design pattern? name common design patterns, when are they used?',
'What are merits and demerits of multiple inheritance in OOPS?',
'How do languages like Java and C# handle multiple inheritance?',
'Explain concept of aspect-oriented programming & its relationship with OOP.',
'How does AOP address cross-cutting concerns in software development?',

].map((subItem, subIndex) => (
            <div key={subIndex}>
              <DropdownMenuItem>
                {subItem}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <DropdownMenuItem>
      </DropdownMenuItem>
      <DropdownMenu>
        <div className='flex item-center'>
        Non-Technical Questions--<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d]hover:bg-[#4c535b]">
      <LayoutList size={20} className="text-blue-500" />
    </DropdownMenuTrigger>
    </div>
        <DropdownMenuContent>
          {['Tell Me About Yourself.',
'What Are Your Strengths and Weaknesses?',
'How did you hear about this position?',
'Why do you want to work at this company?',
'Why do you want this job?',
'Why should we hire you?',
'What can you bring to the company?',
'What are your greatest strengths?',
'What do you consider to be your weaknesses?',
'What is your greatest professional achievement?'


].map((subItem, subIndex) => (
            <div key={subIndex}>
              <DropdownMenuItem>
                {subItem}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </DropdownMenuContent>
</DropdownMenu>




      
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;