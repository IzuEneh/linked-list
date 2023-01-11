const Node = (value = null, next = null) => {
	const toString = () => {
		return `( ${value} )`;
	};
	return { value, next, toString };
};

const LinkedList = () => {
	let _head = null;
	let _tail = null;

	const head = () => _head;
	const tail = () => _tail;

	const append = (value) => {
		if (_head == null) {
			const node = Node(value, null);
			_head = node;
			_tail = _head;
			return;
		}

		const node = Node(value, null);
		_tail.next = node;
		_tail = _tail.next;
	};

	const prepend = (value) => {
		const node = Node(value, _head);
		_head = node;

		if (_tail === null) {
			_tail = _head;
		}
	};

	const size = () => {
		let i = 0;
		let curr = _head;
		while (curr) {
			i += 1;
			curr = curr.next;
		}
		return i;
	};

	const at = (index) => {
		let i = 0;
		let curr = _head;
		while (curr) {
			if (i === index) {
				break;
			}

			curr = curr.next;
			i += 1;
		}

		return curr;
	};

	const pop = () => {
		if (_head === null) {
			return null;
		}

		if (Object.is(_head, _tail)) {
			const removed = _head;
			_head = null;
			_tail = null;
			return removed;
		}

		let curr = _head;
		while (curr.next != _tail) {
			curr = curr.next;
		}

		const removed = _tail;
		curr.next = null;
		_tail = curr;
		return removed;
	};

	const contains = (value) => {
		let curr = _head;
		while (curr) {
			if (curr.value === value) {
				return true;
			}

			curr = curr.next;
		}

		return false;
	};

	const find = (value) => {
		let curr = _head;
		let i = 0;
		while (curr) {
			if (curr.value === value) {
				return i;
			}

			curr = curr.next;
			i += 1;
		}

		return null;
	};

	const toString = () => {
		let curr = _head;
		let output = "";
		while (curr) {
			output += `${curr.toString()} -> `;
			curr = curr.next;
		}

		output += "null";
		return output;
	};

	return {
		head,
		tail,
		append,
		toString,
		prepend,
		size,
		at,
		pop,
		contains,
		find,
	};
};

const list = LinkedList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(6);
list.prepend(1);
