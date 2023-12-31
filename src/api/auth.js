import usersData from '../data/users.json';

export const signupUser = (userData) => {
    const { firstName, lastName, patronymic, phoneNumber, email, password } = userData;

    const isUserExists = usersData.users.some((user) => user.email === email);

    if (isUserExists) {
        return Promise.reject(new Error('Пользователь с такой почтой уже зарегистрирован.'));
    }

    const userId = usersData.users.length + 1;

    const newUser = {
        id: userId,
        firstName,
        lastName,
        patronymic,
        phoneNumber,
        email,
        password,
    };

    usersData.users.push(newUser);

    saveDataToFile(usersData);

    return Promise.resolve(newUser);
};

export const loginUser = (userData) => {
    const { email, password } = userData;

    const user = usersData.users.find((u) => u.email === email && u.password === password);

    if (!user) {
        return Promise.reject(new Error('Неверная почта или пароль.'));
    }

    return Promise.resolve(user);
};

const saveDataToFile = (data) => {
    // тут записываем данные в json
    console.log('Data saved to file:', data);
};
