import React from 'react';
import Contact from './contact';
import data_contact from '../../data/contact_about';

const DepartmentGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-4 mb-4 ml-4 mr-4">
        {data_contact.map((contact) => (
          <Contact 
            department={contact.department}
            name={contact.head_name}
            number={contact.ph_no}
            insta={contact.insta}
          />
        ))}
      </div>
    );
  };

export default DepartmentGrid;