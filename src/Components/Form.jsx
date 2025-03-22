import { useState } from 'react';

function Form() {
    const submit = (e) => {
        e.preventDefault();
        console.log(`Submit eseguito con:
            Nome: ${name}
            Username: ${username}
            Password: ${password}
            Esperienza: ${exp}
            Area: ${area}	`);

    };

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [exp, setExp] = useState('');
    const [area, setArea] = useState('');

    return (
        <div className="flex flex-col items-center mt-6">
            <form onSubmit={submit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">


                <input
                    className="border border-black rounded-md p-2 w-full"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome e Cognome"
                />


                <input
                    className="border border-black rounded-md p-2 w-full"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />


                <input
                    className="border border-black rounded-md p-2 w-full"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />


                <select className="border border-black p-2 rounded-md w-full" defaultValue="">
                    <option value="">-</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                </select>


                <input
                    className="border border-black rounded-md p-2 w-full"
                    type="number"
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    placeholder="Anni di esperienza"
                />

                <input
                    className="border border-black rounded-md p-2 w-full"
                    type="textarea"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Parlaci di te"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Invia
                </button>

            </form>
        </div>
    );
}

export default Form;

