(function () {
  class User {
    constructor(profilePhotoURL = null,
                skills = {},
                skillsScore,
                firstName = 'Name',
                lastName = 'Last name',
                email = 'your@mail.com',
                phoneNumber = '+70000000000',
                age = null,
                yearsOfExperiance = null,
                sex = 'hmmm',
                shortAddres = 'city',
                detailedAddres = 'additional info',
                biography = 'none') {
      this.profilePhotoURL = profilePhotoURL;
      this.skills = skills;
      this.skillsScore = Score(this.skills);
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.yearsOfExperiance = yearsOfExperiance;
      this.age = age;
      this.sex = sex;
      this.shortAddres = shortAddres;
      this.detailedAddres = detailedAddres;
      this.biography = biography;
    }
  }

  function Score(src) {
    let sum = 0;
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        if (typeof src[key] == 'number') {
          sum += src[key];
        }
      }
    }

    return sum;
  }

  let skill = {
    js: 'JavaScript',
    css: 'CSS',
    angular: 'AngularJS',
    etc: 'etc.',
  };

  let userNames = ['Danila', 'Vasya', 'Petya', 'Vasgen', 'Dasha'];

  function createBots() {
    let userArr = [];
    let randomJs = Math.floor((Math.random() * 100) + 1);
    let randomCss = Math.floor((Math.random() * 100) + 1);
    let randomAngular = Math.floor((Math.random() * 100) + 1);

    for (var i = 0; i < userNames.length; i++) {
      userArr.push(new User('none', { [skill.js]: randomJs,
                                      [skill.css]: randomCss,
                                      [skill.angular]: randomAngular,
                                    }, userNames[i]));
    }

    return userArr;
  }

  // Log created bots

  for (var i = 0; i < userNames.length; i++) {
    console.log(createBots()[i]);
  }

}());
