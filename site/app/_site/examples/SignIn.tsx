"use client";
import { useState } from "react";
import { Form } from "react-aria-components";
import { Alert, Button, Card, Checkbox, DoorPlate, Link, Stack, TextField } from "@meetingat10/design-system/react";

export function SignInBody() {
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <main className="site-signin">
      <div className="site-signin__intro">
        <DoorPlate size="lg" tagline="Access for College of Computer Studies" />
        <h1 className="ds-type-h1">Sign in to ACCS</h1>
        <p className="ds-lead">Use your CCS account. Community posts show your name. Reports stay restricted to you and the people assigned to them.</p>
      </div>
      <Card overlay as="section" aria-labelledby="signin-h" className="site-signin__panel">
        <Form
          className="ds-stack ds-stack--20"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            window.setTimeout(() => { setLoading(false); setFailed(true); }, 900);
          }}
        >
          <h2 id="signin-h" className="ds-type-h3">Your CCS account</h2>
          {failed && (
            <Alert tone="danger" title="That email and password don't match">Check both and try again. After five attempts, sign-in pauses for 15 minutes.</Alert>
          )}
          <TextField label="CCS email" type="email" name="email" autoComplete="username" isRequired icon="envelope" placeholder="name@ccs.example.edu" />
          <TextField label="Password" type="password" name="password" autoComplete="current-password" isRequired icon="lock" />
          <div className="ds-row ds-row--between">
            <Checkbox name="remember">Keep me signed in on this device</Checkbox>
            <Link href="#" variant="quiet">Forgot password?</Link>
          </div>
          <Button type="submit" block size="lg" loading={loading} icon="sign-in">Sign in</Button>
          <p className="ds-type-caption ds-secondary">Signing in never makes community posts anonymous.</p>
        </Form>
      </Card>
    </main>
  );
}
