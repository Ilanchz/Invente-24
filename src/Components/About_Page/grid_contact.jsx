import React from 'react';
import Contact from './contact';
import data_contact from '../../data/contact_about';

const DepartmentGrid = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center items-center">
        
        {data_contact.map((contact) => (
          <Contact 
            department={contact.department}
            dept={contact.dept}
            name={contact.head_name}
            number={contact.ph_no}
            insta={contact.insta}
          />
        ))}
      </div>
    );
  };

export default DepartmentGrid;