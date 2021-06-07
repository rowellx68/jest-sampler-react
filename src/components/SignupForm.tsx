import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react'
import cx from 'classnames'

export interface SignupFormProps {
  className?: string
  onSubmit: (fields: SignupFormFields) => void
}

export interface SignupFormFields {
  email: string
  password: string
}

const setFieldValue = (
  ev: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<string>>
) => {
  setter(ev.target.value)
}

const SignupForm: React.FC<SignupFormProps> = ({ className, onSubmit }) => {
  const css = cx(className)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitDisabled = !email || !password
  const btnCss = cx(
    'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600',
    { 'cursor-not-allowed opacity-70': submitDisabled },
    {
      'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
        !submitDisabled,
    }
  )

  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    ev.stopPropagation()

    if (submitDisabled) {
      return
    }

    onSubmit({ email, password })
  }

  return (
    <form className={css} onSubmit={submit}>
      <div className="shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="joe.bloggs@app.dev"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                data-testid="email-input"
                onChange={(ev) => setFieldValue(ev, setEmail)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                placeholder="password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                data-testid="password-input"
                onChange={(ev) => setFieldValue(ev, setPassword)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button className={btnCss}>Signup</button>
        </div>
      </div>
    </form>
  )
}

export default SignupForm
