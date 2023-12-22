import { FaCode, FaBriefcase, FaDollarSign } from 'react-icons/fa';

const DisplaySection = () => {
    const userGroups = [
        { icon: <FaCode size={40}/>, title: 'Developers', description: 'Efficiently manage coding tasks and project deadlines.' },
        { icon: <FaBriefcase size={40} />, title: 'Corporate Professionals', description: 'Organize and track business-related tasks and projects.' },
        { icon: <FaDollarSign size={40} />, title: 'Bankers', description: 'Stay on top of financial tasks and deadlines.' },
      ];
    
      return (
        <section className="target-audience text-center my-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Who Can Benefit?</h2>
          <div className=" md:flex justify-center items-center">
            {userGroups.map((group, index) => (
              <div key={index} className="group-container
               hover:text-white hover:bg-base-300 m-4 p-6 bg-white border
                rounded-lg hover:border-blue-500 transition text-black">
                {group.icon}
                <p className="text-lg font-semibold text-gray-700 my-2">{group.title}</p>
                <p className="text-sm text-gray-500">{group.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
};

export default DisplaySection;