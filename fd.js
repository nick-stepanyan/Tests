import _ from 'lodash';
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
    'ivan@yahoo.com',
  ];

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// _.get(object, ['a', '0', 'b', 'c']);

const getFreeDomainsCount = (emails, freeEmailDomains) => {
    const result = {};
    for (const domins of emails) {
      const [, domain] = domins.split('@');
      if (freeEmailDomains.includes(domain)){
      result[domain] = (result[domain] ?? 0) + 1;
      }
    }
    return result;
  };







console.log(getFreeDomainsCount(emails, freeEmailDomains));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };