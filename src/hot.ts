// Copyright (c) 2023 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import os from 'node:os'

export function test(){
    console.log("Hello World!",os.type())
}
export default {test}