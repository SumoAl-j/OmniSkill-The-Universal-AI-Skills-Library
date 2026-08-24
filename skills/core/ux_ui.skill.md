---
name: UX_UI
version: 1.0.0
category: core
priority: high
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# UX_UI

## Objective

Design and improve user experiences and interfaces that are clear, accessible, consistent, responsive, usable, and appropriate for the intended users and platform.

UX_UI should prioritize user goals, usability, accessibility, visual hierarchy, consistency, feedback, and maintainability rather than visual decoration alone.

## Activation

Activate UX_UI when:

- A new user interface needs to be designed.
- An existing interface needs improvement.
- A user flow is confusing or inefficient.
- A mobile, web, or desktop interface is being developed.
- Navigation or information architecture needs design.
- Forms or interaction patterns need improvement.
- Accessibility needs review.
- Responsive behavior needs to be designed or fixed.
- Visual hierarchy or component consistency needs improvement.
- User feedback indicates usability problems.

## Workflow

### 1. Understand the User and Goal

Identify:

- Target users
- Primary user goals
- User context
- Device or platform
- Important tasks
- User constraints
- Business requirements
- Accessibility requirements

Do not optimize an interface without understanding what users need to accomplish.

### 2. Understand the Existing Product

When working on an existing application, inspect:

- Existing screens
- Navigation
- Components
- Design system
- Typography
- Spacing
- Colors
- Interaction patterns
- Forms
- Loading states
- Error states
- Empty states
- Responsive behavior
- Accessibility implementation

Preserve established patterns when they are already effective.

### 3. Map the User Flow

Identify:

- Entry point
- Primary action
- Required information
- Decision points
- Success state
- Failure states
- Recovery paths

Minimize unnecessary steps while preserving clarity and correctness.

### 4. Define Information Architecture

Organize information according to user needs.

Consider:

- Navigation hierarchy
- Grouping
- Labels
- Content priority
- Search
- Filtering
- Progressive disclosure

Use familiar terminology and avoid unnecessary complexity.

### 5. Establish Visual Hierarchy

Make important information and actions easy to identify.

Consider:

- Heading hierarchy
- Typography
- Spacing
- Contrast
- Alignment
- Size
- Position
- Grouping
- Primary and secondary actions

Visual hierarchy should communicate importance without relying solely on color.

### 6. Design Consistent Components

Use reusable patterns for:

- Buttons
- Inputs
- Cards
- Navigation
- Modals
- Dialogs
- Tables
- Alerts
- Forms
- Loading indicators

Avoid creating visually similar components that behave differently without a clear reason.

### 7. Design Interaction States

Important interactive elements should account for:

- Default
- Hover when applicable
- Focus
- Active
- Disabled
- Loading
- Success
- Error
- Empty
- Selected

Users should receive clear feedback after meaningful actions.

### 8. Design Forms Carefully

Forms should:

- Use clear labels.
- Group related fields.
- Show required fields.
- Provide useful validation.
- Preserve user input when possible.
- Explain errors near the relevant field.
- Avoid unnecessary fields.
- Provide clear submission feedback.

Do not rely only on placeholder text as a field label.

### 9. Design Responsive Interfaces

Consider:

- Mobile
- Tablet
- Desktop
- Different screen sizes
- Touch interaction
- Keyboard interaction
- Orientation changes

Avoid simply shrinking desktop layouts for mobile.

### 10. Prioritize Accessibility

Consider:

- Keyboard navigation
- Focus visibility
- Semantic structure
- Screen readers
- Color contrast
- Text scaling
- Touch target size
- Reduced motion
- Form labels
- Accessible error messages

Do not use color as the only way to communicate meaning.

Follow the SECURITY Skill when interface behavior affects sensitive operations.

### 11. Handle Loading, Empty, and Error States

Every important data-dependent interface should consider:

- Loading
- Empty
- Partial data
- Error
- Retry
- Offline or unavailable states when relevant

Avoid leaving users with blank screens when the system is processing or has failed.

### 12. Optimize Feedback and Affordance

Users should understand:

- What is clickable.
- What is editable.
- What is selected.
- What is currently happening.
- What happened after an action.
- What they should do next.

Use clear labels and predictable interaction patterns.

### 13. Minimize Cognitive Load

Avoid:

- Unnecessary choices
- Excessive information density
- Ambiguous labels
- Hidden important actions
- Repetitive confirmation dialogs
- Unexpected navigation
- Inconsistent terminology

Reveal complexity progressively when appropriate.

### 14. Preserve User Control

Users should be able to:

- Cancel actions when appropriate.
- Undo reversible actions when practical.
- Review important changes.
- Correct mistakes.
- Navigate predictably.

Destructive actions should communicate their consequences clearly.

### 15. Consider Performance

Interface design should account for:

- Perceived loading time
- Skeleton or progress states
- Image sizes
- Animation cost
- Interaction responsiveness
- Network delays

Follow the PERFORMANCE Skill for deeper performance analysis.

### 16. Validate the Experience

When possible:

- Test the main user flow.
- Test keyboard navigation.
- Test responsive layouts.
- Test error states.
- Test empty states.
- Test accessibility.
- Test important interactions.
- Compare the result against the intended user goal.

Do not assume that a visually attractive interface is automatically usable.

### 17. Document Design Decisions

Record important decisions about:

- User flows
- Components
- Responsive behavior
- Accessibility
- Interaction patterns
- Design-system rules
- Known limitations

Keep documentation aligned with the actual implementation.

## Examples

### Example 1 — Booking Flow

A salon application needs a booking flow.

UX_UI should:

1. Identify the user's goal.
2. Show available services clearly.
3. Make employee and time selection understandable.
4. Minimize unnecessary steps.
5. Validate required information.
6. Show booking progress.
7. Provide clear success and error states.
8. Preserve entered information when errors occur.

### Example 2 — Dashboard

A dashboard contains many data points.

UX_UI should:

1. Identify the most important information.
2. Establish visual hierarchy.
3. Group related information.
4. Reduce unnecessary visual noise.
5. Provide useful filtering and navigation.
6. Design loading and empty states.
7. Ensure responsive behavior.
8. Preserve accessibility.

### Example 3 — Form Error

A user submits an invalid form.

UX_UI should:

1. Identify which field is invalid.
2. Explain the problem clearly.
3. Place the error near the relevant field.
4. Preserve valid user input.
5. Keep keyboard focus predictable.
6. Provide a clear path to correction.

## Validation

Before completing a UX/UI task, verify:

- [ ] The target user and primary goal are understood.
- [ ] The existing interface and design patterns were inspected when applicable.
- [ ] The main user flow is clear.
- [ ] Information hierarchy is appropriate.
- [ ] Visual hierarchy is clear.
- [ ] Components use consistent patterns.
- [ ] Important interaction states are handled.
- [ ] Forms provide clear labels and useful validation.
- [ ] Responsive behavior was considered.
- [ ] Keyboard accessibility was considered.
- [ ] Color contrast and non-color cues were considered.
- [ ] Loading states were considered.
- [ ] Empty states were considered.
- [ ] Error and recovery states were considered.
- [ ] User control and predictable navigation were preserved.
- [ ] Performance implications were considered.
- [ ] The main user flow was verified when practical.
- [ ] Design decisions and limitations were documented when relevant.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- ARCHITECTURE.skill.md
- API.skill.md
- SECURITY.skill.md
- PERFORMANCE.skill.md
- TESTING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md
- RESEARCH.skill.md