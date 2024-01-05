import React, { useState } from 'react';

const PreferenceForm = () => {
  const [desiredJobTitles, setDesiredJobTitles] = useState([]);
  const [desiredJobLocations, setDesiredJobLocations] = useState([]);
  const [focusCompanies, setFocusCompanies] = useState([]);
  const [skills, setSkills] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempInput, setTempInput] = useState('');
  const [selectedBox, setSelectedBox] = useState(null);

  const handleOpenDialog = (box) => {
    setIsDialogOpen(true);
    setSelectedBox(box);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTempInput('');
  };

  const handleDialogInputChange = (e) => {
    setTempInput(e.target.value);
  };

  const handleDialogConfirm = () => {
    let updatedList = [];

    switch (selectedBox) {
      case 'desiredJobTitles':
        updatedList = [...desiredJobTitles, tempInput];
        setDesiredJobTitles(updatedList);
        break;
      case 'desiredJobLocations':
        updatedList = [...desiredJobLocations, tempInput];
        setDesiredJobLocations(updatedList);
        break;
      case 'focusCompanies':
        updatedList = [...focusCompanies, tempInput];
        setFocusCompanies(updatedList);
        break;
      case 'skills':
        updatedList = [...skills, tempInput];
        setSkills(updatedList);
        break;
      default:
        break;
    }

    handleCloseDialog();
  };

  const handleRemoveItem = (box, index) => {
    let updatedList = [];

    switch (box) {
      case 'desiredJobTitles':
        updatedList = desiredJobTitles.filter((_, i) => i !== index);
        setDesiredJobTitles(updatedList);
        break;
      case 'desiredJobLocations':
        updatedList = desiredJobLocations.filter((_, i) => i !== index);
        setDesiredJobLocations(updatedList);
        break;
      case 'focusCompanies':
        updatedList = focusCompanies.filter((_, i) => i !== index);
        setFocusCompanies(updatedList);
        break;
      case 'skills':
        updatedList = skills.filter((_, i) => i !== index);
        setSkills(updatedList);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Preferences</h2>

      <div>
        <label>Desired Job Titles:</label>
        {desiredJobTitles.map((title, index) => (
          <div key={index} className="tag">
            {title}
            <button onClick={() => handleRemoveItem('desiredJobTitles', index)}>×</button>
          </div>
        ))}
        <button onClick={() => handleOpenDialog('desiredJobTitles')}>+</button>
      </div>

      <div>
        <label>Desired Job Locations:</label>
        {desiredJobLocations.map((location, index) => (
          <div key={index} className="tag">
            {location}
            <button onClick={() => handleRemoveItem('desiredJobLocations', index)}>×</button>
          </div>
        ))}
        <button onClick={() => handleOpenDialog('desiredJobLocations')}>+</button>
      </div>

      <div>
        <label>Focus Companies:</label>
        {focusCompanies.map((company, index) => (
          <div key={index} className="tag">
            {company}
            <button onClick={() => handleRemoveItem('focusCompanies', index)}>×</button>
          </div>
        ))}
        <button onClick={() => handleOpenDialog('focusCompanies')}>+</button>
      </div>

      <div>
        <label>Skills:</label>
        {skills.map((skill, index) => (
          <div key={index} className="tag">
            {skill}
            <button onClick={() => handleRemoveItem('skills', index)}>×</button>
          </div>
        ))}
        <button onClick={() => handleOpenDialog('skills')}>+</button>
      </div>

      {isDialogOpen && (
        <div>
          <label>Enter Text:</label>
          <input type="text" value={tempInput} onChange={handleDialogInputChange} />
          <button onClick={handleDialogConfirm}>Confirm</button>
          <button onClick={handleCloseDialog}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PreferenceForm;
