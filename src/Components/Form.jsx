import { use } from 'react';
import { useState } from 'react';

function Form() {
    const submit = (e) => {

        if (!name || !username || !password || !role || !exp) {
            alert("Tutti i campi devono essere compilati!");
            return;
        }
        if (username.length < 6) {
            alert("Username deve essere di almeno 6 caratteri");
            return;
        }

        if (exp < 0) {
            alert("Anni di esperienza deve essere maggiore di 0");
            return;
        }

        e.preventDefault();
        console.log(`Submit eseguito con:
            Nome: ${name}
            Username: ${username}
            Password: ${password}
            Esperienza: ${exp}
            Area: ${area}	
            ruolo: ${role}`);

    };


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [exp, setExp] = useState(0);
    const [area, setArea] = useState('');
    const [role, setRole] = useState({ value: '' });

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

                {/* USERNAME */}
                <strong style={{ color: username.length < 6 ? 'red' : 'green' }}>
                    {username.length < 6
                        ? 'Username deve essere almeno di 6 caratteri'
                        : 'Username valido'}
                </strong>
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

                {/* RUOLO */}
                <strong style={{ color: role.value === '' ? 'red' : 'green' }}>
                    {role.value === ''
                        ? 'Seleziona un ruolo'
                        : 'Ruolo selezionato'}
                </strong>
                <select
                    className="border border-black p-2 rounded-md w-full"
                    value={role.value}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="">-</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                </select>

                {/* ESPERIENZA */}
                <strong style={{ color: exp < 0 ? 'red' : 'green' }}>
                    {exp < 0
                        ? 'Anni di esperienza deve essere maggiore di 0'
                        : 'Anni di esperienza valido'}

                </strong>
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

