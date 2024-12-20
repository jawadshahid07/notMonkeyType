import React from 'react';
import MemberCard from '../Cards/memberCard';
import TeamCard from '../Cards/teamCard';
import ProjectCard from '../Cards/ProjectCard';
import member1Pic from '../../assets/racoon-pedro.gif'; 
import member2Pic from '../../assets/racoon-pedro.gif'; 
import member3Pic from '../../assets/racoon-pedro.gif'; 
import member4Pic from '../../assets/racoon-pedro.gif'; 

const About = () => {
  return (
    <div className="bg-gray-100 py-10 m-20  bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 ">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Team Section */}
          <div className='lg:w-max'>
            <h2 className="text-4xl font-bold text-white mb-8">Team</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TeamCard
                name="Via Eyes"
                teacher="Momna Zaneb"
                assistant="Hassan Raza"
              />
            </div>
          </div>
          
          {/* Project Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                name="notMonkeyType"
                detail="typing speed Game Single / MutiPlayer"
                technologiesUsed="Vite,React,NodeJS,MongoDB,Spline"
                githubLink="https://github.com/shaafsalman/notMonkeyType.git"
              />
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-8 mt-16">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MemberCard
            profilePic={member1Pic}
            name="Jawad Shahid"
            rollNumber="21L 5787"
            sectionBatch="2021 Batch"
            contactNumber="03208433967"
            email="l215787@lhr.nu.edu.pk"
          />
          <MemberCard
            profilePic={member2Pic}
            name="Haider Khan"
            rollNumber="21L-6067"
            sectionBatch="2021 Batch"
            email="l216067@lhr.nu.edu.pk"
          />
          <MemberCard
            profilePic={member3Pic}
            name="Syed Farhan Jafri"
            rollNumber="21L 6074"
            sectionBatch="2021 Batch"
            email="l216074@lhr.nu.edu.pk"
          />
          <MemberCard
            profilePic={member4Pic}
            name="Abdul Mannan"
            rollNumber="21L 6121"
            sectionBatch="2021 Batch"
            email="l216121@lhr.nu.edu.pk"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
