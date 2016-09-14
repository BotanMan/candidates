let User = (() => {
  let skill = {
    js: 'js',
    css: 'css',
    angular: 'angularJs'
  };

  class User {
    constructor(profilePhotoURL = 'http://lorempixel.com/400/400/people?v=' + Math.random()*100,
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

    static getBots() {
      function random() {
        return Math.floor((Math.random() * 100) + 1);
      }

      let userNames = ['Danila', 'Vasya', 'Petya', 'Vasgen', 'Dasha', 'Masha', 'Alexander'];

      let userArr = [];

      for (var i = 0; i < userNames.length; i++) {
        userArr.push(new User(undefined, { [skill.js]: random(),
                                        [skill.css]: random(),
                                        [skill.angular]: random(),
                                      }, null, userNames[i]));
      }

      // for (var i = 0; i < userNames.length; i++) {
      //   console.log(userArr[i]);
      // }

      return userArr;
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

  return User;
})();
