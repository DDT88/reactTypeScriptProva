import React from 'react';
import {Conta} from "../reducer/login";
import {useSelector , useDispatch} from "react-redux";

import {RootState} from "../store/store";

const Login = () =>{
   // const [state, dispatch] = React.useReducer(reducer, initialState);
    const counterStore = useSelector<RootState,Conta>((state) => state.login);
    console.log(counterStore.count);
    const dispatch = useDispatch();

    const onIncremente  = (incremento : number) => {
        dispatch({ type: "increment", payload: incremento });
    };

    return(
        <>
            {counterStore.count}
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                         <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="buttons">
                <input className="button" type="submit" value="Submit input" onClick={()=>onIncremente(5)}/>
            </div>
        </>
    );
};
export default Login;