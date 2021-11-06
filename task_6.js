function next_permutation(n, arr)
{
	if (n == 1)
		return arr;
	let i = 0;
	for (i = n - 1; i > 0; i--) {
		if (arr[i] > arr[i - 1])
			break;
	}
	if (i != 0)
	{
		for (let j = n - 1; j >= i; j--)
		{
			if (arr[i - 1] < arr[j])
			{
				let temp = arr[i - 1];
				arr[i - 1] = arr[j];
				arr[j] = temp;
				break;
			}
		}
	}
	return arr;
}