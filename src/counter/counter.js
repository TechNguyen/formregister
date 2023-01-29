import classNames from 'classnames/bind'
import Style from './counter.module.scss'
import { useState } from 'react'
const cx = classNames.bind(Style)
const sexs = [
    { id: 1, value: 'Nam' },

    { id: 2, value: 'Nu' },

    { id: 3, value: 'Khac' },
]
function Counter() {
    const [checked, setCheked] = useState(1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleRegister = () => {
        console.log({ name, email, id: checked })
    }
    return (
        <div className={cx('counter-wrapper')}>
            <label for="name">Full name</label>
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                type="text"
                className={cx('name')}
            />
            <label for="email">Email</label>
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="email"
                className={cx('email')}
            />
            <div className={cx('sex')}>
                {sexs.map((sex) => (
                    <span key={sex.id}>
                        <input
                            type="radio"
                            checked={checked === sex.id}
                            onChange={() => setCheked(sex.id)}
                            className={cx('input-sex')}
                        />
                        {sex.value}
                    </span>
                ))}
            </div>
            <button onClick={handleRegister} className={cx('register')}>
                Register
            </button>
        </div>
    )
}

export default Counter
