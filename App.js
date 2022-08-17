import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [expression, setExpression] = useState("");
  const expressionCreate = (value) => {
    if (value == "/" || value == "*" || value == "+" || value == "-") {
      let lastChar = expression[expression.length - 1];
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "+" ||
        lastChar == "-"
      ) {
        setExpression(expression);
      } else {
        setExpression(expression + value.toString());
      }
    } else if (
      value == "log" ||
      value == "sin" ||
      value == "cos" ||
      value == "tan"
    ) {
      switch (value) {
        case "log":
          setExpression(Math.log(expression).toPrecision(2));
          break;
        case "sin":
          setExpression(Math.sin((expression * Math.PI) / 180).toPrecision(2));
          break;
        case "cos":
          setExpression(Math.cos((expression * Math.PI) / 180).toPrecision(2));
          break;
        case "tan":
          setExpression(Math.tan((expression * Math.PI) / 180).toPrecision(2));
          break;
      }
    } else {
      setExpression(expression + value.toString());
    }
  };
  const cpress = () => {
    setExpression(expression.slice(0, expression.length - 1));
  };
  const evaluate = () => {
    let res = eval(expression);
    setExpression(res);
  };
  const square = () => {
    {
      expression != "" ? setExpression(Math.pow(expression, 2)) : null;
    }
  };
  const root = () => {
    {
      expression != "" ? setExpression(Math.sqrt(expression)) : null;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#252837"} />
      <View style={styles.appName}>
        <Text style={styles.appNameText}>Calculator</Text>
      </View>
      <View style={styles.head}>
        <Text style={styles.textBox}>{expression}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate("log")}
          >
            <Text style={styles.btnGroupFourText}>Log</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate("sin")}
          >
            <Text style={styles.btnGroupFourText}>Sin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate("cos")}
          >
            <Text style={styles.btnGroupFourText}>Cos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnGroupFour, { backgroundColor: "#56CBD7" }]}
            onPress={() => expressionCreate("tan")}
          >
            <Text style={styles.btnGroupFourText}>Tan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnClear}
            onPress={() => setExpression("")}
          >
            <Text style={styles.btncGroupThreeText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnC} onPress={cpress}>
            <Text style={styles.btncGroupThreeText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnDivide}
            onPress={() => expressionCreate("/")}
          >
            <Text style={[styles.btncGroupThreeText, { color: "#fff" }]}>
              &#xf7;
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.btnGroupFour, { flexDirection: "row" }]}
            onPress={square}
          >
            <Text style={styles.btnGroupFourText}>X</Text>
            <Text style={styles.sup}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGroupFour} onPress={root}>
            <Text style={styles.btnGroupFourText}>&#x221A;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate("(")}
          >
            <Text style={styles.btnGroupFourText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnGroupFour, { backgroundColor: "#56CBD7" }]}
            onPress={() => expressionCreate(")")}
          >
            <Text style={styles.btnGroupFourText}>)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(7)}
          >
            <Text style={styles.btnGroupFourText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(8)}
          >
            <Text style={styles.btnGroupFourText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(9)}
          >
            <Text style={styles.btnGroupFourText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnGroupFour, { backgroundColor: "#56CBD7" }]}
            onPress={() => expressionCreate("*")}
          >
            <Text style={styles.btnGroupFourText}>&#xd7;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(4)}
          >
            <Text style={styles.btnGroupFourText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(5)}
          >
            <Text style={styles.btnGroupFourText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(6)}
          >
            <Text style={styles.btnGroupFourText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnGroupFour, { backgroundColor: "#56CBD7" }]}
            onPress={() => expressionCreate("-")}
          >
            <Text style={styles.btnGroupFourText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(1)}
          >
            <Text style={styles.btnGroupFourText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(2)}
          >
            <Text style={styles.btnGroupFourText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGroupFour}
            onPress={() => expressionCreate(3)}
          >
            <Text style={styles.btnGroupFourText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnGroupFour, { backgroundColor: "#56CBD7" }]}
            onPress={() => expressionCreate("+")}
          >
            <Text style={styles.btnGroupFourText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnC}
            onPress={() => expressionCreate(0)}
          >
            <Text style={[styles.btncGroupThreeText, { color: "#fff" }]}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnC}
            onPress={() => expressionCreate(".")}
          >
            <Text style={[styles.btncGroupThreeText, { color: "#fff" }]}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnClear} onPress={evaluate}>
            <Text style={styles.btncGroupThreeText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101216",
  },
  appName: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appNameText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  head: {
    flex: 2,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 4,
  },
  body: {
    // borderWidth: 1,
    flex: 5,
  },
  textBox: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
  },
  btnClear: {
    borderWidth: 4,
    flex: 2.1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#56CBD7",
    borderRadius: 8,
  },
  btnC: {
    borderWidth: 4,
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#56CBD7",
    borderRadius: 8,
  },
  btnDivide: {
    borderWidth: 4,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#56CBD7",
    borderRadius: 8,
  },
  btnGroupFour: {
    borderWidth: 4,
    borderRadius: 8,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252837",
  },
  btnGroupFourText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  btncGroupThreeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#252837",
  },
  sup: {
    position: "relative",
    bottom: 5,
    left: 2,
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
});
