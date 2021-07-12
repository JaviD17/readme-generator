// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const ifLink = (data) => {
  if(data.confirmDeploy) {
    return data.projectLink;
  }
  else {
    return 'Sorry no link';
  }
};

module.exports = data => {

  return `# ${data.project}

  > Author of project: ${data.name}

  ## Project Description
  
  > ${data.description}
  
  ## Link to Deployed application if applicable
  
  [readme-generator] (https://${ifLink(data)})`
};
