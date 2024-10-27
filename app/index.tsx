import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
	const [count, setCount] = useState(0);
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text style={{ fontSize: 30 }}>호민 + 현수 타이머</Text>
			<Text style={{ fontSize: 100 }}>{count}</Text>
			<View style={{ flexDirection: "row" }}>
				<Button
					color={timerId ? "red" : "blue"}
					title={timerId ? "타이머 중지" : "타이머 시작"}
					onPress={() => {
						if (timerId) {
							clearInterval(timerId);
							setTimerId(null);
							return;
						}
						setTimerId(
							setInterval(() => {
								setCount((prev) => prev + 1);
							}, 1000),
						);
					}}
				/>
				{!timerId && <Button title="초기화" onPress={() => setCount(0)} />}
			</View>
		</SafeAreaView>
	);
}
