import { useState } from 'react';

function Form() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\" + `",.<>/? `;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [exp, setExp] = useState(0);
    const [area, setArea] = useState('');
    const [role, setRole] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [areaValid, setAreaValid] = useState(true);

    const validateUsername = (value) => {
        if (value.length < 6) {
            setUsernameValid(false);
            return;
        }
        for (let i = 0; i < value.length; i++) {
            if (!letters.includes(value[i]) && !numbers.includes(value[i])) {
                setUsernameValid(false);
                return;
            }
        }
        setUsernameValid(true);
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            setPasswordValid(false);
            return;
        }

        let hasNumber = false;
        let hasLetter = false;
        let hasSymbol = false;

        for (let i = 0; i < value.length; i++) {
            if (numbers.includes(value[i])) hasNumber = true;
            if (letters.includes(value[i])) hasLetter = true;
            if (symbols.includes(value[i])) hasSymbol = true;
        }

        if (!hasNumber || !hasLetter || !hasSymbol) {
            setPasswordValid(false);
            return;
        }

        setPasswordValid(true);
    };

    const validateArea = (value) => {
        if (value.trim().length < 100 || value.trim().length > 1000) {
            setAreaValid(false);
            return;
        }
        setAreaValid(true);
    };

    const submit = (e) => {
        if (!name || !username || !password || !role || !exp) {
            alert("Tutti i campi devono essere compilati!");
            return;
        }

        if (!usernameValid || !passwordValid || !areaValid) {
            alert("Correggi gli errori prima di inviare il modulo!");
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
                    className={`border rounded-md p-2 w-full ${usernameValid ? 'border-black' : 'border-red-500'}`}
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        validateUsername(e.target.value);
                    }}
                    placeholder="Username"
                />
                {!usernameValid && <p className="text-red-500">Username deve contenere solo lettere o numeri e almeno 6 caratteri.</p>}
                {usernameValid && username && <p className="text-green-500">Username valido.</p>}

                <input
                    className={`border rounded-md p-2 w-full ${passwordValid ? 'border-black' : 'border-red-500'}`}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                    }}
                    placeholder="Password"
                />
                {!passwordValid && <p className="text-red-500">Password deve contenere almeno 8 caratteri, 1 numero, 1 lettera e 1 simbolo.</p>}
                {passwordValid && password && <p className="text-green-500">Password valida.</p>}

                <select
                    className="border border-black p-2 rounded-md w-full"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
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

                <textarea
                    className={`border rounded-md p-2 w-full ${areaValid ? 'border-black' : 'border-red-500'}`}
                    value={area}
                    onChange={(e) => {
                        setArea(e.target.value);
                        validateArea(e.target.value);
                    }}
                    placeholder="Descrizione"
                />
                {!areaValid && <p className="text-red-500">Descrizione deve essere tra 100 e 1000 caratteri (senza spazi iniziali o finali).</p>}
                {areaValid && area && <p className="text-green-500">Descrizione valida.</p>}

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
