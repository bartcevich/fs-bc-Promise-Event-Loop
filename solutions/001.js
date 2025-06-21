function fetchUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.',
      });
    }, 1*1000);
  });
}

function fetchUserTweets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.',
      ]);
    }, 1,5*1000);
  });
}

function forError() {
  return Promise.reject("Ошибка!");
}

function fetchUserFollowers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(15000);
    }, 2000); 
  });
}

async function loadUserProfile() {
  const [userInfo, getError, tweets, followers,] = await Promise.allSettled([
         fetchUserInfo(),
         forError(),
         fetchUserTweets(),
         fetchUserFollowers(),
     ]);
    console.log(followers?.status, followers?.value); 
    console.log(userInfo?.status, userInfo?.value);
    console.log(getError?.status, getError?.reason); 
    console.log(tweets?.status, tweets?.value);       
    }

loadUserProfile();
/*fulfilled 15000
main.js:44 fulfilled {name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.'}
main.js:45 rejected Ошибка!
main.js:46 fulfilled (3) ['Коммичу в пятницу вечером. Что может пойти не так?', 
'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']*/
