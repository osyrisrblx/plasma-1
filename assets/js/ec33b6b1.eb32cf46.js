"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[444],{53001:function(e){e.exports=JSON.parse('{"functions":[{"name":"automaticSize","desc":"Applies padding-aware automatic size to the given GUI instance. This function sets up events to listen to further changes, so\\nshould only be called once per object.\\n\\nAlso supports ScrollingFrames by correctly clamping actual and canvas sizes.","params":[{"name":"container","desc":"The instance to apply automatic sizing to.","lua_type":"GuiObject"},{"name":"options","desc":"","lua_type":"{ axis: Enum.AutomaticSize, maxSize: Vector2} | nil"}],"returns":[],"function_type":"static","tags":["utilities"],"source":{"line":66,"path":"src/automaticSize.lua"}},{"name":"create","desc":"A function that creates an Instance tree.\\n\\nCreateProps is a table:\\n- String keys are interpreted as properties to set\\n- Numerical keys are interpreted as children\\n- Function values are interpreted as event handlers\\n\\nThis function doesn\'t do anything special. It just creates an instance.\\n\\n```lua\\ncreate(\\"Frame\\", {\\n\\tBackgroundTransparency = 1,\\n\\tName = \\"Checkbox\\",\\n\\n\\tcreate(\\"TextButton\\", {\\n\\t\\tBackgroundColor3 = Color3.fromRGB(54, 54, 54),\\n\\t\\tSize = UDim2.new(0, 30, 0, 30),\\n\\n\\t\\tcreate(\\"UICorner\\", {\\n\\t\\t\\tCornerRadius = UDim.new(0, 8),\\n\\t\\t}),\\n\\n\\t\\tActivated = function()\\n\\t\\t\\tsetClicked(true)\\n\\t\\tend,\\n\\t}),\\n```","params":[{"name":"className","desc":"The class name of the Instance to create","lua_type":"string"},{"name":"props","desc":"","lua_type":"CreateProps"}],"returns":[{"desc":"The created instance","lua_type":"Instance"}],"function_type":"static","tags":["utilities"],"source":{"line":37,"path":"src/create.lua"}},{"name":"new","desc":"","params":[{"name":"rootInstance","desc":"The root instance of which to mount all children. Likely a ScreenGui.","lua_type":"Instance"}],"returns":[{"desc":"An opaque object which holds persistent state about your UI.","lua_type":"Node"}],"function_type":"static","source":{"line":84,"path":"src/Runtime.lua"}},{"name":"createContext","desc":"Creates a [Context] object which is used to pass state downwards through the tree without needing to thread it\\nthrough every child as props.","params":[{"name":"name","desc":"The human-readable name of the context. This is only for debug purposes.","lua_type":"string"}],"returns":[{"desc":"An opqaue Context object which holds persistent state.","lua_type":"Context"}],"function_type":"static","source":{"line":98,"path":"src/Runtime.lua"}},{"name":"useContext","desc":"Returns the value of this context provided by the most recent ancestor that used `provideContext` with this context.","params":[{"name":"context","desc":"A context object previously created with `createContext`","lua_type":"Context"}],"returns":[{"desc":"","lua_type":"T"}],"function_type":"static","tags":["hooks"],"source":{"line":115,"path":"src/Runtime.lua"}},{"name":"provideContext","desc":"Provides a value for this context for any subsequent uses of `useContext` in this scope.","params":[{"name":"context","desc":"A context object previously created with `createContext`","lua_type":"Context"},{"name":"value","desc":"Any value you want to provide for this context","lua_type":"T"}],"returns":[],"function_type":"static","source":{"line":134,"path":"src/Runtime.lua"}},{"name":"useEffect","desc":"`useEffect` takes a callback as a parameter which is then only invoked if passed dependencies are different from the\\nlast time this function was called. The callback is always invoked the first time this code path is reached.\\n\\nIf no dependencies are passed, the callback only runs once.\\n\\nThis function can be used to skip expensive work if none of the dependencies have changed since the last run.\\nFor example, you might use this to set a bunch of properties in a widget if any of the inputs change.","params":[{"name":"callback","desc":"A callback function that optionally returns a cleanup function","lua_type":"() -> () | () -> () -> ()"},{"name":"...","desc":"Dependencies","lua_type":"any"}],"returns":[],"function_type":"static","tags":["hooks"],"source":{"line":153,"path":"src/Runtime.lua"}},{"name":"useState","desc":"```lua\\nlocal checked, setChecked = useState(false)\\n\\nuseInstance(function()\\n\\tlocal TextButton = Instance.new(\\"TextButton\\")\\n\\n\\tTextButton.Activated:Connect(function()\\n\\t\\tsetChecked(not checked)\\n\\tend)\\n\\n\\treturn TextButton\\nend)\\n\\nTextButton.Text = if checked then \\"X\\" else \\"\\"\\n```","params":[{"name":"initialValue","desc":"The value this hook returns if the set callback has never been called","lua_type":"T"}],"returns":[{"desc":"The previously set value, or the initial value if none has been set","lua_type":"T"},{"desc":"A function which when called stores the value in this hook for the next run","lua_type":"(newValue: T) -> ()"}],"function_type":"static","tags":["hooks"],"source":{"line":212,"path":"src/Runtime.lua"}},{"name":"useInstance","desc":"`useInstance` takes a callback which should be used to create the initial UI for the widget.\\nThe callback is only ever invoked on the first time this widget runs and never again.\\nThe callback should return the instance it created.\\nThe callback can optionally return a second value, which is the instance where children of this widget should be\\nplaced. Otherwise, children are placed in the first instance returned.\\n\\n`useInstance` returns the instance returned by the `creator` callback on the initial call and all further calls.","params":[{"name":"creator","desc":"A callback which creates the widget and returns it","lua_type":"() -> (Instance, Instance?)"}],"returns":[{"desc":"Returns the instance returned by `creator`","lua_type":"Instance"}],"function_type":"static","tags":["hooks"],"source":{"line":252,"path":"src/Runtime.lua"}},{"name":"start","desc":"Begins a new frame for this Plasma instance. The `callback` is invoked immediately.\\nCode run in the `callback` function that uses plasma APIs will be associated with this Plasma node.\\nThe `callback` function is **not allowed to yield**.","params":[{"name":"rootNode","desc":"A node created by `Plasma.new`.","lua_type":"Node"},{"name":"callback","desc":"","lua_type":"(...: T) -> ()"},{"name":"...","desc":"Additional parameters to `callback`","lua_type":"T"}],"returns":[],"function_type":"static","source":{"line":352,"path":"src/Runtime.lua"}},{"name":"scope","desc":"Begins a new scope. This function may only be called within a `Plasma.start` callback.\\nThe `callback` is invoked immediately.\\n\\nBeginning a new scope associates all further calls to Plasma APIs with a nested scope inside this one.","params":[{"name":"callback","desc":"","lua_type":"(...: T) -> ()"},{"name":"...","desc":"Additional parameters to `callback`","lua_type":"T"}],"returns":[],"function_type":"static","source":{"line":415,"path":"src/Runtime.lua"}},{"name":"widget","desc":"This function takes a widget funtion and returns a function that automatically starts a new scope when the function\\nis called.","params":[{"name":"callback","desc":"The widget function","lua_type":"(...: T) -> ()"}],"returns":[{"desc":"A function which can be called to create the widget","lua_type":"(...: T) -> ()"}],"function_type":"static","source":{"line":427,"path":"src/Runtime.lua"}},{"name":"useStyle","desc":"Returns the current style information, with styles that are set more recently in the tree overriding styles that\\nwere set further up. In this way, styles cascade downwards, similar to CSS.","params":[],"returns":[],"function_type":"static","tags":["style"],"source":{"line":23,"path":"src/Style.lua"}},{"name":"setStyle","desc":"Defines style for any subsequent calls in this scope. Merges with any existing styles.","params":[{"name":"styleFragment","desc":"A dictionary of style information","lua_type":"{[string]: any}"}],"returns":[],"function_type":"static","tags":["style"],"source":{"line":35,"path":"src/Style.lua"}},{"name":"arrow","desc":"- `arrow(from: Vector3, to: Vector3)` -> Creates an arrow between `from` and `to`\\n- `arrow(point: Vector3)` -> Creates an arrow pointing at `point`\\n- `arrow(cframe: CFrame)` -> Creates an arrow with its point at the CFrame position facing the CFrame LookVector\\n- `arrow(part: BasePart)` -> Arrow represents the Part\'s CFrame\\n- `arrow(fromPart: BasePart, toPart: BasePart)` -> Arrow between the two parts\\n\\n![Arrows](https://i.eryn.io/2150/arrows.png)\\n\\n```lua\\nPlasma.arrow(Vector3.new(0, 0, 0))\\nPlasma.arrow(Vector3.new(5, 5, 5), Vector3.new(10, 10, 10))\\n```","params":[{"name":"from","desc":"","lua_type":"Vector3 | CFrame | BasePart"},{"name":"to","desc":"","lua_type":"Vector3 | BasePart | nil"},{"name":"color","desc":"Optional color. Random if not specified.","lua_type":"Color3?"}],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":22,"path":"src/widgets/arrow.lua"}},{"name":"blur","desc":"A blur effect in the world. Created in Lighting.","params":[{"name":"size","desc":"The size of the blur","lua_type":"number"}],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":9,"path":"src/widgets/blur.lua"}},{"name":"button","desc":"A text button.\\n\\nReturns a widget handle, which has the field:\\n\\n- `clicked`, a function you can call to check if the checkbox was clicked this frame\\n\\n![A button](https://i.eryn.io/2150/RobloxStudioBeta-iwRM0RMx.png)\\n\\n```lua\\nPlasma.window(\\"Button\\", function()\\n\\tif Plasma.button(\\"button text\\"):clicked() then\\n\\t\\tprint(\\"clicked!\\")\\n\\tend\\nend)\\n```","params":[{"name":"label","desc":"The label for the checkbox","lua_type":"string"}],"returns":[{"desc":"","lua_type":"ButtonWidgetHandle"}],"function_type":"static","tags":["widgets"],"source":{"line":24,"path":"src/widgets/button.lua"}},{"name":"checkbox","desc":"A checkbox. A checkbox may either be controlled or uncontrolled.\\n\\nBy passing the `checked` field in `options`, you make the checkbox controlled. Controlling the checkbox means that\\nthe checked state is controlled by your code. Otherwise, the controlled state is controlled by the widget itself.\\n\\nReturns a widget handle, which has the fields:\\n\\n- `checked`, a function you can call to check if the checkbox is checked\\n- `clicked`, a function you can call to check if the checkbox was clicked this frame\\n\\n![Checkboxes](https://i.eryn.io/2150/9Yg31gc8.png)\\n\\n```lua\\nPlasma.window(\\"Checkboxes\\", function()\\n\\tif Plasma.checkbox(\\"Controlled checkbox\\", {\\n\\t\\tchecked = checked,\\n\\t}):clicked() then\\n\\t\\tchecked = not checked\\n\\tend\\n\\n\\tPlasma.checkbox(\\"Disabled checkbox\\", {\\n\\t\\tchecked = checked,\\n\\t\\tdisabled = true,\\n\\t})\\n\\n\\tPlasma.checkbox(\\"Uncontrolled checkbox\\")\\nend)\\n```","params":[{"name":"label","desc":"The label for the checkbox","lua_type":"string"},{"name":"options","desc":"","lua_type":"{disabled: boolean, checked: boolean}"}],"returns":[{"desc":"","lua_type":"CheckboxWidgetHandle"}],"function_type":"static","tags":["widgets"],"source":{"line":38,"path":"src/widgets/checkbox.lua"}},{"name":"portal","desc":"The portal widget creates its children inside the specified `targetInstance`. For example, you could use this\\nto create lighting effects in Lighting as a widget:\\n\\n\\n```lua\\nreturn function(size)\\n\\tportal(Lighting, function()\\n\\t\\tuseInstance(function()\\n\\t\\t\\tlocal blur = Instance.new(\\"BlurEffect\\")\\n\\t\\t\\tblur.Size = size\\n\\t\\t\\treturn blur\\n\\t\\tend)\\n\\tend)\\nend\\n```","params":[{"name":"targetInstance","desc":"Where the portal goes to","lua_type":"Instance"},{"name":"children","desc":"Children","lua_type":"() -> ()"}],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":24,"path":"src/widgets/portal.lua"}},{"name":"row","desc":"Lays out children horizontally","params":[{"name":"options","desc":"","lua_type":"{padding: Vector2}"},{"name":"children","desc":"Children","lua_type":"() -> ()"}],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":10,"path":"src/widgets/row.lua"}},{"name":"spinner","desc":"A spinner widget, indicating loading.\\n\\n![A spinner](https://i.eryn.io/2150/RobloxStudioBeta-sEyci8qy.png)","params":[],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":10,"path":"src/widgets/spinner.lua"}},{"name":"window","desc":"A window widget. Contains children.\\n\\nIn the future:\\n- Closable\\n- Draggable\\n- Resizable\\n\\n![Window with checkboxes](https://i.eryn.io/2150/TVkkOnxj.png)","params":[{"name":"title","desc":"The title of the window","lua_type":"string"},{"name":"children","desc":"Children","lua_type":"() -> ()"}],"returns":[],"function_type":"static","tags":["widgets"],"source":{"line":17,"path":"src/widgets/window.lua"}}],"properties":[],"types":[],"name":"Plasma","desc":"","source":{"line":2,"path":"src/init.lua"}}')}}]);