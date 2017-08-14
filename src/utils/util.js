/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */
export function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise (val) {
  return val && typeof val.then === 'function'
}

export function assert (condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export function generateData(size, min, max){
  const data = [];
  for (let i = 0; i < size; i++) {
    const num = rand(min, max);
    data.push(num);
  }
  return data;
};

//检测手机号
exports.verifyPhone = function(phone){
	var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
	if(phoneReg.test(phone+'')){
		return true;
	}else{
		return false;
	}
} 
//检测密码，必须有数字、大写字母、小写字母、触控格外的字符任意两种
exports.verifyPwd = function(p){
    var index = p.indexOf('\\');
    var tmp = '';
    var result = 0;
    if (index >= 0) {
        var arr = p.split('')
        arr.splice(index, 0 , '\\');
        tmp = arr.join('');
    } else {
        tmp = p + '';

    }
    var pwdReg = /^\S\S{4,18}\S$/;
    var lowCase = /^\S*[a-z]\S*$/;
    var upperCase = /^\S*[A-Z]\S*$/;
    var number = /^\S*[0-9]\S*$/;
    var symbol = /[`~!@#$%^&*\(\)\_\+\-\=\[\]\\\{\}|;':",./<>?]$/;
    lowCase.test(tmp) && result ++;
    upperCase.test(tmp) && result ++;
    number.test(tmp) && result ++;
    symbol.test(tmp) && result ++;
    
	if(pwdReg.test(tmp) && result >=2){
		return true;
	}else{
		return false;
	}
}

exports.verifyEmail = function(email){
    var reg = /^\w+([-_.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(reg.test(email.toString())){
        return true;
    }else{
        return false;
    }

}
