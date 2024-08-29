import React from 'react';
import Contact from './contact'; 
import data_contact from '../../data/contact_about'; 

const DepartmentGrid = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {data_contact.map((contact) => (
                <Contact
                    key={contact.id} 
                    department={contact.department}
                    name={contact.head_name}
                    number={contact.ph_no}
                    insta={contact.insta}
                    image={contact.image}
                />
            ))}
        </div>
    );
};

export default DepartmentGrid;
