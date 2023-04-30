"use client";

import Link from "next/link";
import { useState } from "react";

import Validator, { validationRegexes } from "@/lib/Validator";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isFirstNameCorrect, setIsFirstNameCorrect] = useState(true);

  return (
    <form
      action="/api/auth/callback/credentials"
      method="POST"
      className="mr-4 flex basis-1/2 flex-col pl-0 text-sm lg:pl-16"
    >
      <div className="flex w-full flex-col gap-3 rounded-lg p-5 shadow-2xl">
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-bold">Register</p>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="flex w-full gap-8">
          <div className="flex basis-1/2 flex-col gap-2">
            <label
              className={
                isFirstNameCorrect ? "text-gray-500" : "font-bold text-red-500"
              }
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              className={`input-box ${!isFirstNameCorrect && "border-red-500"}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Validator
              regexValidation={validationRegexes.alphaNumeric}
              input={firstName}
              callbackOnValid={() => {
                setIsFirstNameCorrect(true);
              }}
              callbackOnInvalid={() => {
                setIsFirstNameCorrect(false);
              }}
            />
          </div>
          <div className="flex basis-1/2 flex-col gap-2">
            <label className="text-gray-500" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              className="input-box"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-box"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="input-box"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500" htmlFor="username">
            Phone Number
          </label>
          <input
            id="phone-number"
            name="phone-number"
            className="input-box"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex w-full gap-8">
          <div className="flex basis-1/2 flex-col gap-2">
            <label className="text-gray-500" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input-box"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="show_password" />
              <label htmlFor="show_password">Show Password</label>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col gap-2">
            <label className="text-gray-500" htmlFor="password-confirm">
              Password Confirm
            </label>
            <input
              id="password-confirm"
              type="password"
              className="input-box"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="basis-1/2">
            <hr className="mb-6" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="agree_terms_and_conditions" />
              <label htmlFor="agree_terms_and_conditions">
                I agree to the{" "}
                <Link className="link" href="#">
                  Terms & Conditions
                </Link>
              </label>
            </div>
          </div>
        </div>
        <button className="btn mt-2">Sign up</button>
      </div>
    </form>
  );
}
