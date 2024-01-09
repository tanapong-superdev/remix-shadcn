import { faker } from "@faker-js/faker";
export type Mail = {
  id?: number;
  from?: string;
  to?: string;
  subject?: string;
  unread?: boolean;
  body?: string;
  date?: Date;
};
const mails: Mail[] = [];
export default function Mail() {
  function getAll() {
    return mails;
  }
  function get(id: number) {
    return mails.find((mail) => mail.id === id);
  }
  function addMail(mail: Mail) {
    mails.push(mail);
  }
  return { getAll, addMail, get };
}
export async function getMails(query?: string | null) {
  const mails = Mail().getAll();
  if (query) {
    return mails.filter((mail: Mail) =>
      mail.from?.toLowerCase().includes(query.toLowerCase())
    );
  }
  return mails;
}
export async function read(id: number) {
  const mail = Mail().get(id);
  if (mail) {
    mail.unread = false;
  }
}
export async function getMail(id: number) {
  return Mail().get(id);
}
const mail = Mail();
Array.from({ length: 100 }, (_, index) => {
  mail.addMail({
    id: index + 1,
    from: faker.person.firstName() + " " + faker.person.lastName(),
    email: faker.internet.email(),
    to: faker.internet.email(),
    subject: faker.lorem.sentence(),
    unread: true,
    body: faker.lorem.paragraph(),
    date: faker.date.past(),
  });
});
