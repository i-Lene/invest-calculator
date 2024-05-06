import { useState } from "react";

export default function UserInput({ handleInputChange, userInput }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-invest">Initial Investment</label>
                    <input
                        id="initial-invest"
                        name="initialInvestment"
                        value={userInput.initialInvestment}
                        onChange={(event) => handleInputChange('initialInvestment', event.target.value)}
                        type="number" required
                    />
                </p>
                <p>
                    <label htmlFor="anualInvest">Annual Investment</label>
                    <input
                        id="anualInvest"
                        name="annualInvestment"
                        value={userInput.annualInvestment}
                        onChange={(event) => handleInputChange('annualInvestment', event.target.value)}
                        type="number" required
                    />
                </p>
                <p>
                    <label htmlFor="anualReturn">Annual Return</label>
                    <input
                        id="anualReturn"
                        name="expectedReturn"
                        value={userInput.expectedReturn}
                        onChange={(event) => handleInputChange('expectedReturn', event.target.value)}
                        type="number" required
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        name="duration"
                        value={userInput.duration}
                        onChange={(event) => handleInputChange('duration', event.target.value)}
                        type="number" required
                    />
                </p>

            </div>

        </div>
    )
}
