import React, { Component } from "react";
import { Button, Input, Label, Segment, Form } from "semantic-ui-react";

class Calculator extends Component {
  state = {
    name: "EMI Calculator",
    p: 5000000,
    r: 10,
    n: 240,
    emi: 0,
  };

  calculateEmi = (ps: any, rs: any, ns: any) => {
    let p = parseFloat(ps);
    let r = parseFloat(rs) / 1200;
    let n = parseFloat(ns);
    console.log(p, r, n);
    let f = Math.pow(1 + r, n);
    let emi = Math.floor(p * r * (f / (f - 1)));
    this.setState({
      emi: emi,
    });
  };

  render() {
    let { name, p, r, n, emi } = this.state;
    return (
      <div>
        <h3>{name}</h3>
        <Form>
          <Form.Field>
            <label>Principal Loan Amount</label>
            <input
              type="number"
              name="p"
              placeholder="Enter Principal amount"
              value={p}
              onChange={(e) => this.setState({ p: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Rate of interest(per month)</label>
            <input
              type="number"
              name="r"
              placeholder="Enter p/m interest rate"
              value={r}
              onChange={(e) => this.setState({ r: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Duration in months</label>
            <input
              type="number"
              name="n"
              placeholder="Enter duration period"
              value={n}
              onChange={(e) => this.setState({ n: e.target.value })}
            />
          </Form.Field>

          <Button color="violet" onClick={() => this.calculateEmi(p, r, n)}>
            Calculate EMI
          </Button>
        </Form>

        <Segment>
    <h2>{emi !== 0 ? `Your EMI will be ₹${emi}` : `Click on the calculate button to calculate your emi`}</h2>
        </Segment>
      </div>
    );
  }
}

export default Calculator;
