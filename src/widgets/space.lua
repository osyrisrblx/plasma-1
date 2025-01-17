local Runtime = require(script.Parent.Parent.Runtime)
local create = require(script.Parent.Parent.create)

return Runtime.widget(function(size)
	local refs = Runtime.useInstance(function(ref)
		return create("Frame", {
			[ref] = "space",
			BackgroundTransparency = 1,
		})
	end)

	Runtime.useEffect(function()
		refs.space.Size = UDim2.new(0, size, 0, size)
	end, size)
end)
