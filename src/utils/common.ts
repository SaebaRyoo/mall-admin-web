// 获取数据类型
export const getType = (data: any) =>
	Object.prototype.toString.call(data).replace(/\[\w+\s(\w+)\]/, '$1');

// 深拷贝
export function deepClone<T>(data: any): T {
	let copy: any;
	if (getType(data) === 'Object') {
		copy = {};
		for (let key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
				if (getType(data[key]) !== 'Object' && getType(data[key]) !== 'Array') {
					copy[key] = data[key];
				} else {
					copy[key] = deepClone(data[key]);
				}
			}
		}
	} else if (getType(data) === 'Array') {
		copy = [];
		for (let i = 0; i < data.length; i++) {
			if (getType(data[i]) !== 'Object' && getType(data[i]) !== 'Array') {
				copy.push(data[i]);
			} else {
				copy.push(deepClone(data[i]));
			}
		}
	} else {
		return data;
	}
	return copy;
}
