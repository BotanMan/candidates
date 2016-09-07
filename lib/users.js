let Users = (function () {
  let skill = {
    js: 'JavaScript',
    css: 'CSS',
    angular: 'AngularJS',
    etc: 'etc.',
  };

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

    static getBots() {
      function random() {
        return Math.floor((Math.random() * 100) + 1);
      }

      let userNames = ['Danila', 'Vasya', 'Petya', 'Vasgen', 'Dasha'];

      function dataBots() {
        let userArr = [];

        for (var i = 0; i < userNames.length; i++) {
          userArr.push(new User('none', { [skill.js]: random(),
                                          [skill.css]: random(),
                                          [skill.angular]: random(),
                                        }, null, userNames[i]));
        }

        return userArr;
      }

      for (var i = 0; i < userNames.length; i++) {
        console.log(dataBots()[i]);
      }
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

  User.getBots();
});

Users();
