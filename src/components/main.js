import React, {useState} from 'react';
import Command from './command'
import Result from './result'
import Fetching from './fetching'
import Lists from './lists'

const Main = () => {

    return (
      <div>
        <Result></Result>
        <Command></Command>
        <Fetching> </Fetching>
        <Lists></Lists>
      </div>
    );
  }
  
export default Main;